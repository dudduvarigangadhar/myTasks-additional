import styled from 'styled-components'

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 600px;
  margin-left: 35px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 20px;
  background-color: #131213;
`
export const TaskName = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  font-weight: bold;
`

export const TaskCategory = styled.p`
  //   width: 65px;
  background-color: #f3aa4e;
  border-radius: 15px;
  height: 25px;
  color: #ffffff;
  padding-left: 10px;
  font-size: 15px;
`
