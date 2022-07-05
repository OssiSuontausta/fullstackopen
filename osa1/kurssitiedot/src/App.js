const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of react"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of component"
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1 + " " + exercises1} part2={part2 +" " + exercises2} part3={part3 +" " + exercises3}/>
      <Total exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
     <p>{props.course}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1}{props.exercises1}</p>
      <p>{props.part2}{props.exercises2}</p>
      <p>{props.part3}{props.exercises3}</p>
    </div>
  )
} 

const Total = (props) => {
  return (
    <div>  
      <p>
       {props.exercises}
        </p>
    </div>
  )
}

export default App
