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
      <Content></Content> <Part/>
      <Total exercises={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
     <h1>{props.course}</h1>
    </div>
  )
}


const Part = (props)  => {
  return (
    <div>
      <p>{props.part} {props.exercises}</p>
    </div>
  )
}      

const Content = (props) => {
  return (
    <div>
     <Part/>
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