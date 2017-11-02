import React, { Component } from 'react'
import { listRepoFilesRequest } from '../Requests'
import { TableContainer, SectionRepo, FormRepo} from './TableDirectoryComponentStyles'

class Table extends Component {

  constructor(props) {
    super(props)

    this.state = {
      repoUserName: '',
      repoName: '',
      repoContent: [],
      isFetchingData: false
    }

    this.listRepoFiles = this.listRepoFiles.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const { repoUserName, repoName } = this.state
    if (!repoName || !repoName) {
      alert('Por favor, preencha todos os campos.')
      return;
    }
    this.listRepoFiles(repoUserName, repoName)
  }

  listRepoFiles(repoUserName, repoName, repoDir) {
    this.setState({ isFetchingData: true })
    listRepoFilesRequest(repoUserName.trim(), repoName.trim(), repoDir || '')
      .then(response => this.setState({ repoContent: response.data, isFetchingData: false }) )
      .catch(error => { this.setState({  isFetchingData: false }); console.error('Error fetching data from API:', error); alert('Houve um error na requisição do repositório')})
  }

  renderForm() {
    return (
      <FormRepo onSubmit={this.handleSubmit}>
        <div>
          <label>Usuário</label>
          <input type="text" value={this.state.repoUserName} name="repoUserName" placeholder="Nome do usuário; ex: gaearon" onChange={this.handleChange} />
        </div>
        <div>
          <label>Repositório</label>
          <input type="text" value={this.state.repoName} name="repoName" placeholder="Nome do repositório; ex: react" onChange={this.handleChange} />
        </div>
        <div className="form-button">
          <button type="submit">Buscar</button>
        </div>
        <div className="error_message">
          {!Array.isArray(this.state.repoContent) ? <div>Repositório não encontrado.</div> : null}
        </div>
      </FormRepo>
    )
  }

  renderReturnToPrevDir() {
    const getPrevDirPath = path => {
      // has parent dir
      if (path.split('/').length > 2) {
        // create an array of the folder and files of the path, then we pop the last file and folder from the array. At this point we create a new path with the remaining parts of the array, and lastly we pop the "/" from the front of our new path :)
        return path.split('/').slice(0, -2).reduce((a, b) => `${a}/${b}`, '').substr(1)
      } else {
        return '' // has no parent dir
      }
    }
    if (this.state.repoContent.length > 0 && this.state.repoContent[0].path.split('/').length > 1) {
      return (
        <tr>
          <td>
            <p>{
              // eslint-disable-next-line
            }<a href="#" onClick={() => this.listRepoFiles(this.state.repoUserName, this.state.repoName, getPrevDirPath(this.state.repoContent[0].path) )}>..</a>
            </p>
          </td>
        </tr>
      )
    }
  }

  render() {
    return (
      <SectionRepo>
        {this.renderForm()}
        <TableContainer>
          {this.state.isFetchingData ?
            <tbody>
              <tr>
                <td>
                  Carregando...
                </td>
              </tr>
            </tbody> :
            <tbody>
              {this.renderReturnToPrevDir()}
              {Array.isArray(this.state.repoContent) && this.state.repoContent.map(content => {
                return (
                  <tr key={content.sha+content.name}>
                    <td>
                      <p>{content.type === "dir" ?
                        // eslint-disable-next-line
                        <a href="#" onClick={() => this.listRepoFiles(this.state.repoUserName, this.state.repoName, content.path)}>{content.name}</a> : content.name}
                      </p>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          }
        </TableContainer>
      </SectionRepo>
    );
  }
}
export default Table
