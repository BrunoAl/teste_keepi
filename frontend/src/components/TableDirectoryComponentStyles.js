import styled from 'styled-components'

export const TableContainer = styled.table `
  border: 1px solid #ccc;
  border-collapse: collapse;
  margin-top: 20px;
  padding: 0;
  width: 100%;
  table-layout: fixed;
  color: #ef3e68;

  tr {
    background: #f8f8f8;
    border: 1px solid #ddd;
    padding: .35em;
  }

  th, td {
    padding: .625em;
    text-align: center;
  }

  th {
    font-size: .85em;
    letter-spacing: .1em;
    text-transform: uppercase;
  }
`
export const SectionRepo = styled.section `
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  margin-bottom: 80px;
  margin-top: 50px;
  padding: 25px 40px;
  background-color: #ffffff;
  border-radius: 6px;
`

export const FormRepo = styled.form `
  color: #ef3e68;
  font-size: 14px;
  label {
    margin-top: 20px;
    display: inline-block;
    width: 100%;
    margin-bottom: 15px;
    font-size: 1.14em;
    font-weight: 400;
    text-align: left;
  }
  input {
    box-sizing: border-box;
    width: 100%;
    min-width: 200px;
    height: 50px;
    padding: 20px;
    font-size: 1.14em;
    background-color: #ffffff;
    border: 1px solid #a4acc6;
    border-radius: 6px;
  }
  input::-webkit-input-placeholder {
    font-size: 12px;
    line-height: 3;
  }
  button {
    font-size: 1.14em;
    margin-top: 20px;
    padding: 5px 0;
    width: 40%;
    font-weight: 200;
    color: #FFF;
    background-color: #ef3e68;
    border-color: #ef3e68;
    border-radius: 5px;
    cursor: pointer;
    transition: all .2s ease-in;
    letter-spacing: .08em;
    border: 0;

    @media (min-width: 600px) {
      width: 20%;
    }
  }
  .form-button {
    flex: 0 1 100%;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  .search-inputs {
    max-width: 300px;
  }

  .error_message {
    margin: 10px;
  }

`
