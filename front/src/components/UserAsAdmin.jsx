import React from 'react'
import { giveadmAccess } from '../redux/action-creators/action-creator'
import { connect } from 'react-redux'
import store from '../redux/store'

class UserAsAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState(
      { [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    const user = this.state
    this.props.giveadmAccess(user)
    return this.props.history.push('/')
  }
  
  render() {
    return (
      <form className='userAsAdm' onSubmit={this.handleSubmit}>
        <h1>Cambio de Perfil de Usuario</h1>
        <div>
          <label className='labelDelAdm'>E-MAIL DE USUARIO:</label>
          <input name='email' className='inputDelAdm' type='email' onChange={this.handleChange}  />
        </div>
        <div>
          <img className = 'adminIcons'  src="/utils/user1.svg"></img>
          <button className='botonesAdm btn btn-success' onSubmit={this.handleSubmit} >Hacer Administrador</button>
          <img className = 'adminIcons' src="/utils/userdelete.svg"></img>
          <button className='botonesAdm btn btn-danger'>Eliminar Usuario</button>
        </div>
      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  giveadmAccess: (user) => dispatch((giveadmAccess(user)))
})

export default connect(mapStateToProps, mapDispatchToProps)(UserAsAdmin);