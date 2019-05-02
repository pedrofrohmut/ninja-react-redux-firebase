import React from "react"

const ProjectDetails = (props) => {
  const id = props.match.params.id
  return (
    <div className="ProjectDetail section container">
      <div className="card z-depth-0">
        <div className="card-content">
          <div className="card-title">Project Title - {id}</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima nostrum ipsam libero expedita veritatis soluta repellat neque eum non eos saepe, magni iste? Vel et eum magni eligendi consequuntur amet sequi! Debitis dolor perspiciatis, quam dicta rem vitae cumque hic numquam sit aliquid harum obcaecati alias sapiente iste eum reprehenderit error suscipit porro fugit? Beatae praesentium tempora ea ut voluptatibus.</p>
        </div>
        <div className="card-action grey-text">
          <span>Posted by The Net Ninja</span>
          <span>2nd September, 2am</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetails