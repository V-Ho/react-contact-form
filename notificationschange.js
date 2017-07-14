

var NotificationItem = React.createClass ( {
  propTypes: {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    date: React.PropTypes.string,
    views: React.PropTypes.number,
  },

  render: function (){
    return (
      React.createElement('ul', {className: 'NotificationHeader'}, "Notification Table"),
        React.createElement('ul', {},
          React.createElement('ul', {className: 'NotificationItem-title'}, this.props.title),
          React.createElement('ul', {className: 'NotificationItem-body'}, this.props.body),
          React.createElement('ul', {className: 'NotificationItem-date'}, this.props.date),
          React.createElement('ul', {className: 'NotificationItem-views'}, this.props.views)
        )
    );
  },
});

var NotificationForm = React.createClass ({
  propTypes: {
    value: React.PropTypes.object.isRequired,
    onChange: React.PropTypes.func.isRequired,
  },


  render: function() {
    var oldNotification = this.props.value;
    var onChange = this.props.onChange;

    return (
      React.createElement('ul', {}, "New Notification Form"),
        React.createElement('form', {className: 'NotificationForm'},
          React.createElement('input', {
            type: 'text',
            placeholder: 'Title of Notification',
            value: this.props.notification.title,
            onChange: function(e) {
              onChange(Object.assign({}, oldNotification, {name: e.target.value}));
            },
          }),
          React.createElement('input', {
            type: 'textarea',
            placeholder: 'Notification Content',
            value: this.props.notification.body,
            onChange: function(e) {
              onChange(Object.assign{}, oldNotification, {name: e.target.value})
            },
          }),
          React.createElement('input', {
            type: 'textarea',
            placeholder: 'Date (will be automated)',
            value: this.props.notification.date
          }),
          React.createElement('input', {
            type: 'number',
            placeholder: 'Views (will be automated)',
            value: this.props.notification.views
          }),
        React.createElement('button', {type: 'Submit'}, "Send")
        )
      );
  },
})

var NotificationView = React.createClass({
  propTypes: {
    notifications: React.PropTypes. array.isRequired,
    newNotification: React.PropTypes.object.isRequired,
  },

  render: function() {
    var notificationItemElements = this.props.notifications
      .map(function(notification) {return React.createElement(NotificationItem, notification); });

    return (
      React.createElement('h1', {}, 'Notification Form'),
        React.createElement(NotificationForm, {
            value:this.props.newNotification,
            onChange: function(contact) {console.log(contact);},
          }),
        React.createElement('div', {className: 'NotificationView'},
          React.createElement('h1', {className: 'NotificationView-title'}, 'Notification Title'),
          React.createElement('ul;', {className: 'NotificationView-list'}, notificationItemElements),
        )
      )

    },
});



var notifications = [
  {key: 1, title: "Notification 1", body: "This is a draft Notification, let's hope this thing works!", date: "July 5, 2017", views: "1000"},
  {key: 2, title: "Notification 2", body: "Another example notification", date: "December 2, 1999", views: "5559"}
];

var newNotification =
  {title: "", body: "", date: "", views: ""};

ReactDOM.render(
  React.createElement(NotificationView, {
    notifications: notifications,
    newNotification: newNotification,
  }),
   document.getElementById('react-app')
 );
