var notifications = [
  {key: 1, title: "Notification 1", body: "This is a draft Notification, let's hope this thing works!", date: "July 5, 2017", views: "1000"},
  {key: 2, title: "Notification 2", body: "Another example notification", date: "December 2, 1999", views: "5559"}
]

var newNotification =
  {title: "", body: "", date: "", views: ""}

var NotificationItem = React.createClass ( {
  propTypes: {
    title: React.PropTypes.string.isRequired,
    body: React.PropTypes.string.isRequired,
    date: React.PropTypes.string,
    views: React.PropTypes.number
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
    )
  },
})

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
            value: this.props.notification.date,
            onChange: function(e) {
              onChange(Object.assign({}, oldNotification, {name: e.target.value}))
            },
          }),
          React.createElement('input', {
            type: 'number',
            placeholder: 'Views (will be automated)',
            value: this.props.notification.views,
            onChange: function(e) {
              onChange(Object.assign({}, oldNotification, {name: e.target.value}))
            },
          }),
        React.createElement('button', {type: 'Submit'}, "Send")
        )
      );
  },
});

var notificationItemElements = notifications
  .map(function(notification) {return React.createElement(NotificationItem, notification)})



var rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Notification Form'),
    React.createElement(NotificationForm, {notification: newNotification}),
  React.createElement('div', {},
    React.createElement('h1', {}, 'All Notifications'),
    React.createElement('ul', {}, notificationItemElements)
  )
)

ReactDOM.render(rootElement, document.getElementById('react-app'))


// var contacts = [
//     {key: 1, name: "Vanessa L Ho", email: "assenav66@gmail.com", description: "Front-end Unicorn"},
//     {key: 2, name: "Hazel", email: "hazel@example.com"},
//     {key: 3, name: "Victoria"},
// ]
//
// var newContact = {name: "", email: "", description: ""}
//
// var ContactItem = React.createClass( {
//   propTypes: {
//     name: React.PropTypes.string.isRequired,
//     email: React.PropTypes.string.isRequired,
//     description: React.PropTypes.string
//   },
//
//
//   render: function() {
//     return (
//       React.createElement('ul', {}, "Contacts"),
//         React.createElement('ul', {},
//           React.createElement('h2', {}, this.props.name),
//           React.createElement('a', {href: 'mailto'+this.props.email}, this.props.email),
//           React.createElement('div', {}, this.props.description)
//         )
//       )
//   },
// })
//
// var ContactForm = React.createClass({
//   propTypes: {
//     contact: React.PropTypes.object.isRequired
//   },
//
//   render: function() {
//     return (
//       React.createElement('ul', {}, "New Contact Form"),
//         React.createElement('form', {},
//           React.createElement('input', {
//               type: 'text',
//               placeholder: 'Name (requried)',
//               value: this.props.contact.name
//           }),
//           React.createElement('input', {
//             type: 'email',
//             placeholder: 'email address',
//             value: this.props.contact.email
//           }),
//           React.createElement('input', {
//             type: 'textarea',
//             placeholder: 'description',
//             value: this.props.contact.description
//           }),
//         React.createElement('button', {type: 'Submit'}, "Submit")
//       )
//     )
//   },
// })
//
// var contactItemElements = contacts
//   .filter(function(contact) { return contact.email})
//   .map(function(contact) {return React.createElement(ContactItem, contact)})
//
// var rootElement =
//   React.createElement('div', {},
//     React.createElement('h1', {}, "Notification Form"),
//     React.createElement(ContactForm, {contact: newContact}),
//     React.createElement('h1', {}, "Contacts"),
//     React.createElement('ul', {}, contactItemElements)
//
// )
//
// ReactDOM.render(rootElement, document.getElementById('react-app'))
