import Tag from "./tag"


function ProjectHeader({ adTitle, tagList }) {

    return (

        <div className="projectHeader">

            <div className="projectHeader_title">
                <h1>{!adTitle ? "No title" : `${adTitle}`}</h1>
            </div>
            <div className="projectHeader_tags">
                {!tagList
                    ?
                    <Tag tagContent="No tags" />
                    :
                    tagList.map((tag) => {
                        return <Tag key={tag} tagContent={`${tag}`} />
                    })
                }
            </div>

        </div>

    )

}

export default ProjectHeader