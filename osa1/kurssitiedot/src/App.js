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
      <Content name1={part1} exe1={exercises1}
               name2={part2} exe2={exercises2}
               name3={part3} exe3={exercises3}/>
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
 

const Content = (props) => {
  return (
    <div>
     <Part name={props.name1} exe={props.exe1}/>
     <Part name={props.name2} exe={props.exe2}/>
     <Part name={props.name3} exe={props.exe3}/>
    </div>
  )
}


const Total = (props) => {
  return (
    <div>  
      <h1>
        Total exercises {props.exercises}
      </h1>
    </div>
  )
}

const Part = (props)  => {
  return (
    <div>
      <p>{props.name} {props.exe} exercises</p>
    </div>
  )
}     

export default App