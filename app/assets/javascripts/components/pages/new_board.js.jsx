(function (root) {

  root.NewBoard = React.createClass({

    render: function () {
      return (
        <div>
          <SinterestHeader
            title='New Board'
            description='Start something amazing.' />
          <div className='new-form-container new-board-container' >
            <BoardForm />
          </div>
        </div>
      );
    }
  });
}(this));
