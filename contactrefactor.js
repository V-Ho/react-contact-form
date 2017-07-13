var contacts = [
    {key: 1, name: "Vanessa L Ho", email: "assenav66@gmail.com", description: "Front-end Unicorn"},
    {key: 2, name: "Hazel", email: "hazel@example.com"},
    {key: 3, name: "Victoria"},
]

var newContact = {name: "", email: "", description: ""}

var ContactItem = React.createClass( {
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
  },


  render: function() {
    return (
      React.createElement('ul', {}, "Contacts"),
        React.createElement('ul', {},
          React.createElement('h2', {}, this.props.name),
          React.createElement('a', {href: 'mailto'+this.props.email}, this.props.email),
          React.createElement('div', {}, this.props.description)
        )
      )
  },
})

var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      React.createElement('ul', {}, "New Contact Form"),
        React.createElement('form', {},
          React.createElement('input', {
              type: 'text',
              placeholder: 'Name (requried)',
              value: this.props.contact.name
          }),
          React.createElement('input', {
            type: 'email',
            placeholder: 'email address',
            value: this.props.contact.email
          }),
          React.createElement('input', {
            type: 'textarea',
            placeholder: 'description',
            value: this.props.contact.description
          }),
        React.createElement('button', {type: 'Submit'}, "Submit")
      )
    )
  },
})

var contactItemElements = contacts
  .filter(function(contact) { return contact.email})
  .map(function(contact) {return React.createElement(ContactItem, contact)})

var rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, "Contacts"),
    React.createElement('ul', {}, contactItemElements),
    React.createElement(ContactForm, {contact: newContact})
)

ReactDOM.render(rootElement, document.getElementById('react-app'))
