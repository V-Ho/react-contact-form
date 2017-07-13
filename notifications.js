var notifications = [
  {key: 1, title:"Notification 1", body:"This is a draft Notification, let's hope this thing works!", date: "July 5, 2017", views: "1000"},
  {key: 2, title:"Notification 2", body:"Another example notification", date: " December 2, 1999", views: "5559"}
]

var newNotification =
  {title: "", body: "", date: "", views: ""}

var NotificationItem = React.createClass ({
  propTypes: {
    title: React.propTypes.string.isRequired,
    body: React.propTypes.string.isRequired,
    date: React.propTypes.string
    views: React.propTypes.number
  },

  render function (){
    React.createElement('ul', {}, "Notification Table"),
      React.createElement('ul', {},
        React.createElement('h3', {}, this.props.title),
        React.createElement('h3', {}, this.props.body),
        React.createElement('h3', {}, this.props.date),
        React.createElement('h3', {}, this.props.views),
      )
  },
})

var NotificationForm = react.createClass ({
  propTypes: {
    notification: React.propTypes.object.isRequired
  },

  render function() {
    return (
      React.createElement('ul', {}, "New Notification Form"),
        React.createElement('form', {},
          React.createElement('input'{
            type: 'text',
            placeholder: 'Title of Notification',
            value: this.props.notification.title
          }),
          React.createElement('input' {
            type: 'text',
            placeholder: 'Notification Content',
            value: this.props.notification.body
          }),
          React.createElement('input' {
            type: 'text',
            placeholder: 'Date (will be automated)',
            value: this.props.notification.date
          }),
          React.createElement('input' {
            type: 'number',
            placeholder: 'Views (will be automated)',
            value: this.props.notification.views
          }),
        React.createElement('button', {type: 'Submit'}, "Send")
        ),
      )
  }
})

var notificationItemElements = notifications
  React.createElement('div', {},
    React.createElement('h1', {}, 'Notification Form'),
    React.createElement(NotificationForm, {notification:newNotification}),
    React.createElement('h1', {}, 'Sent Notifications'),
    React.createElement('h1', {}, notificationItemElements)
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
