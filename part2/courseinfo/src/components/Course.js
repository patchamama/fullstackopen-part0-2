
const Header = ({title}) => {
    return (
      <h1>{title}</h1>
    )
  }
  
const Content = ({course}) => {
    const total = course.parts.reduce( (s, p) => s + p.exercises, 0) 
    return (
      <div>
        <h2>{course.name}</h2>
        <Part course={course} />
        <p><strong>total of {total} exercises</strong></p>
      </div>
    )
  }
  
  const Part = ({course}) => {
    return (
      <>
        { course.parts.map(item => (
          <p key={item.id}> {item.name} {item.exercises}</p>
          )
        )}
      </>
    )
  }
  
  const Course = ({courses}) => { 
    console.log(courses)
    return (
      <>
        <Header title="Web development curriculum" />
        { courses.map( course => (
            <Content key={course.id} course={course} />
          )
        )}
        
      </>
    )
  }

  export default Course