import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import './App.css'
import Tasks from './components/Tasks'

// These are the lists used in the application. You can move them to any component needed.

import {
  CreateTaskCon,
  CreateTaskHeading,
  FormContainer,
  AddBtn,
  InputElement,
  LabelInput,
  MyTaskCon,
  Select,
  Option,
  TagsHeading,
  TagsContainer,
  TagButton,
  TaskHeading,
  NoTasks,
  TasksContainer,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here

class App extends Component {
  state = {
    searchInput: '',
    selectedTag: tagsList[0].optionId,
    myTasks: [],
    category: 'INITIAL',
  }

  onChangeSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeTag = event => {
    // console.log(event.target.value)
    this.setState({selectedTag: event.target.value})
  }

  onChangeCategory = displayText => {
    // console.log(displayText)
    this.setState({
      category: displayText,
    })
    // this.setState(prevState => ({
    //   category:
    //     prevState.selectedTag === event.target.value
    //       ? 'INITIAL'
    //       : event.target.value,
    // }))
  }

  addTask = () => {
    const {searchInput, selectedTag} = this.state
    const taskName = searchInput
    const taskCategory = selectedTag
    const id = uuid()
    const bgColor = false

    if (searchInput.value !== 0) {
      this.setState(prevState => ({
        myTasks: [...prevState.myTasks, {id, taskName, taskCategory, bgColor}],
        searchInput: '',
        selectedTag: tagsList[0].optionId,
      }))
    }
  }

  render() {
    const {myTasks, selectedTag, searchInput, category, bgColor} = this.state
    console.log('mytasks =', myTasks)
    // const filteredTasks =
    //   category === 'INITIAL'
    //     ? myTasks
    //     : myTasks.filter(eachItem => eachItem.taskCategory === category)

    const filteredTasks = myTasks.filter(
      eachItem => eachItem.category === category,
    )
    console.log('filtered', filteredTasks)

    return (
      <MyTaskCon>
        <CreateTaskCon>
          <CreateTaskHeading>Create a task!</CreateTaskHeading>
          <FormContainer>
            <LabelInput For="task">Task</LabelInput>
            <InputElement
              id="task"
              type="text"
              value={searchInput}
              placeholder="Enter the task here"
              onChange={this.onChangeSearch}
            />
            <LabelInput For="tags">Tags</LabelInput>
            <Select id="tags" onChange={this.onChangeTag} value={selectedTag}>
              {tagsList.map(eachItem => (
                <Option value={eachItem.optionId} key={eachItem.optionId}>
                  {eachItem.displayText}
                </Option>
              ))}
            </Select>
            <AddBtn type="button" onClick={this.addTask}>
              Add Task
            </AddBtn>
          </FormContainer>
        </CreateTaskCon>
        <div>
          <TagsHeading>Tags</TagsHeading>
          <TagsContainer>
            {tagsList.map(eachItem => {
              const isActive = category === eachItem.optionId
              return (
                <TagButton
                  type="button"
                  value={eachItem.optionId}
                  key={eachItem.optionId}
                  isActive={isActive}
                  color={bgColor ? '#f3aa4e' : '#131213'}
                  onClick={() => this.onChangeCategory(eachItem.optionId)}
                >
                  {eachItem.displayText}
                </TagButton>
              )
            })}
          </TagsContainer>
          <TagsHeading>Tasks</TagsHeading>
          {myTasks.length === 0 ? (
            <div>
              <NoTasks>No Tasks Added Yet</NoTasks>
            </div>
          ) : (
            <div>
              {filteredTasks.map(eachItem => (
                <ul>
                  <Tasks details={eachItem} key={eachItem.id} />
                </ul>
              ))}
            </div>
          )}
        </div>
      </MyTaskCon>
    )
  }
}

export default App
