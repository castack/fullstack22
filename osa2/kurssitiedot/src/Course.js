

const Course = ({ course }) => {
    return (
      <div>
        <Header course={course.name} />
        <Content parts={course.parts} />
      </div>
    )
}

export default Course

const Header = ({ course }) => {
    return (
      <div>
        <h2>{course}</h2>
      </div>
    )
}
  
const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part=><Part key={part.id} part={part.name} exercises={part.exercises}/>)}
            <Total parts={parts}/>
        </div>
    )
}
  
const Part = ({ part, exercises }) => {
    return (
      <div>
        <p>{part} {exercises}</p>
      </div>
    )
}
  
const Total = ({ parts }) => {
    //let exercies = parts.map(part=>part.exercises);
    //const reducer = (s, p) => s + p;
    const tot = parts.map(part=>part.exercises).reduce((s, p) => s + p)
    return(
      <b>total of {tot} exercises</b>
    )
}
