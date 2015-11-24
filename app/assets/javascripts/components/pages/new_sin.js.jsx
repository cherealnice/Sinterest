(function (root) {

  root.NewSin = React.createClass({

    render: function () {
      return (
        <div>
          <SinterestHeader
            title='New Sin'
            description='Make it count.' />
          <div className='new-form-container sin-form-container'>
            <SinForm />
          </div>
        </div>
      );
    }
  });
}(this));
