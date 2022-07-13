const App = () => {
  
  const course = { 
    
    name: "Half Stack application development",
    parts: [
  {
      name: "Fundamentals of react",
      exercises: 10
  },

  {
      name: "Using props to pass data",
      exercises: 7
  },

  {
      name: "State of component",
      exercises: 14
  }
 ]
}

  return (
    <div>
      <Header  course={course} />
      <Content parts={course.parts} />
      <Total   parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  console.log(props)
  return (
    <div>
     <h1>{props.course.name}</h1>
    </div>
  )
}
 

const Content = (props) => {
  console.log(props)
  return (
    <div><h3>
     <Part name={props.parts[0].name} exe={props.parts[0].exercises}/>
     <Part name={props.parts[1].name} exe={props.parts[1].exercises}/>
     <Part name={props.parts[2].name} exe={props.parts[2].exercises}/>
     </h3></div>
  )
}


const Total = (props) => {
  console.log(props)
  return (
    <div>  
      <h2>
        Total exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
      </h2>
    </div>
  )
}

const Part = (props)  => {
  console.log(props)
  return (
    <div>
      <p>{props.name}: {props.exe} exercises</p>
    </div>
  )
}     

export default App