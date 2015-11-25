(function (root) {

  root.BoardsIndexPage = React.createClass({

    render: function () {
      return (
        <div>
          <SinterestHeader
            title='Boards'
            description='Find something new.' />
          <BoardsIndex id='boards-index' />
        </div>
      );
    }
  });
})(this);
