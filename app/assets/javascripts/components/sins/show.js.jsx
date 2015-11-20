(function (root) {

  root.SinShow = React.createClass({

    getInitialState: function () {
      return this.getStateFromStore();
    },

    getStateFromStore: function () {
      var sin = SinStore.find(this.props.sinId);
      return { sin: sin };
    },

    _onChange: function () {
      this.setState(this.getStateFromStore());
    },

    componentWillReceiveProps: function (newProps) {
      var sinId = newProps.sinId;
      ApiUtil.fetchSingleSin(sinId);
    },

    componentDidMount: function () {
      SinStore.on(SinStore.SIN_DETAIL_CHANGE_EVENT, this._onChange);
      ApiUtil.fetchSingleSin(this.props.sinId);
    },

    componentWillUnmount: function () {
      SinStore.removeListener(SinStore.SIN_DETAIL_CHANGE_EVENT, this._onChange);
    },

    render: function () {
      var sin = this.state.sin;
      var details;
      var comments;
      if (sin) {
        details = (
        <div>
          <section className='sin-show-section'>
            <div className='sin-show-image-container'>
              <img className='sin-show-image' src={sin.image_url} />
            </div>
            <a href={sin.link}>Go to link</a>
            <h1>{sin.title}</h1>
            <p className='sin-show-desc'>{sin.description}</p>
          </section>
        </div>
        );

        if (sin.comments) {
          comments = (<CommentsIndex comments={sin.comments} />);
        }
      }
      return (
        <div className="sin-wrapper">
          {details}
          <section className="sin-comments">
            {comments}
            <CommentForm sin={sin} />
          </section>
        </div>
      );
    }
  });
}(this));
