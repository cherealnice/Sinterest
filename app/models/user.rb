class User < ActiveRecord::Base

  validates :fname, :lname, :username, :session_token,
            :password_digest, :email, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  validates :session_token, :username, :email, uniqueness: true
  validate  :email_format

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials (username, password)
    user = User.find_by(username: username)
    if user
      user.is_password?(password) ? user : nil
    end
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    if password
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def email_format
  end
end
