import styled from 'styled-components'

export const MyTaskCon = styled.div`
  height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: row;
`

export const CreateTaskCon = styled.div`
  background-color: #1a171d;
  padding: 10px;
  width: 600px;
  height: 100%;
  padding-left: 80px;
`

export const CreateTaskHeading = styled.h1`
  font-family: 'Roboto';
  color: #f3aa4e;
  margin-right: 20%;
  text-align: center;
`

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 10%;
`

export const LabelInput = styled.label`
  font-family: 'Roboto';
  color: #f8f8f8;
  font-weight: bold;
`

export const InputElement = styled.input`
  height: 35px;
  outline: none;
  width: 400px;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-left: 15px;
`

export const AddBtn = styled.button`
  margin-top: 30px;
  background-color: #f3aa4e;
  width: 120px;
  color: #ffffff;
  cursor: pointer;
  height: 30px;
  border-radius: 5px;
  border: none;
  margin-left: 20%;
`

export const Select = styled.select`
  width: 400px;
  height: 35px;
  margin-top: 10px;
  padding-left: 10px;
`

export const Option = styled.option`
  font-family: 'Roboto';
`
export const TagsHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  margin-left: 35px;
`

export const TagsContainer = styled.ul``

export const TagButton = styled.button`
  font-family: 'Roboto';
  border: 1px solid #f3aa4e;
  background-color: ${props => props.color};
  color: #ffffff;
  margin-right: 10px;
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 10px;
`

export const TaskHeading = styled.h1``

export const TasksContainer = styled.div``

export const NoTasks = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  text-align: center;
  margin-top: 15%;
  font-size: 30px;
`
