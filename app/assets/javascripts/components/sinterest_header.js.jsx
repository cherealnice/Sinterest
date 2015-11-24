(function (root) {

  var Link = ReactRouter.Link;

  root.SinterestHeader = React.createClass({
    mixins: [ReactRouter.History],

    render: function () {
      var title = this.props.title;
      var description = this.props.description;
      var button = this.props.button;
      var user;

      return(
        <div>
          <header className='content-header'>
            <div>
              <section className='navbar group' >
                <input type='text' placeholder='Search...' />
              </section>
              <section className='content-header-top'>
                <div className='header-title group'>
                  <Link className='root-link' to={'/'} />
                  <h1 className='content-header-title'>{title}</h1>
                </div>
                <p className='content-header-desc'>{description}</p>
              </section>
              <section className='content-header-bottom'>
                {button}
                <p className='content-header-user'>
                </p>
              </section>
            </div>
          </header>
          <Link className='fixed-link new-board-link' to={'/board/new'} />
          <Link className='fixed-link view-boards-link' to={'/boards'} />
        </div>
      );
    }
  });



}(this));
