import Card from '../card/Card'
import {blogsData} from '../constant/blogs'
import Topic from '../topicItem/Topic'
import {tags} from '../constant/tags'
import HashTag from '../hashTag/HashTag'
import {cardContent} from '../constant/blogs'
import SideCard from '../sideCard/sideCard'
import Button from '../button/Button'
export default function BlogSection() {
    console.log(blogsData)
    return (
        <div className="main">

            <div className="container">

                <div className="blog">

                    <h2 className="h2">Latest Blog Post</h2>

                    <div className="blog-card-group">
                        {blogsData?.map((item,index)=>{
                            return <Card key={index} data={item} />
                        })}

                        <Card data={
                            {
                                img: require("../../assets/images/blog-1.png"),
                                topic: "Database",
                                title: "Building microservices with Dropwizard, MongoDB & Docker",
                                text : "This NoSQL database oriented to documents (by documents like JSON) combines some of the features from relational databases, easy to use and the multi-platform is the best option for scale up and have fault tolerance, load balancing, map reduce, etc."
                            }
                        } />
                        
                    </div>

                    <Button title="Load More" bgcolor="rgb(88, 88, 245)" color='white' style={{ textAlign: "center" }} />

                </div>

                <div className="aside">

                    <div className="topics">

                        <h2 className="h2">Topics</h2>

                        <Topic title="Database" />
                        <Topic title="Accessablility" />
                        <Topic title="Web Performance" />

                    </div>

                    <div className="tags">

                        <h2 className="h2">Tags</h2>

                        <div className="wrapper">

                            {tags?.map((item,index)=>{
                                return <HashTag key={index} title={item} />
                            })}

                        </div>

                    </div>

                        {cardContent?.map((item,index)=>{
                            return <SideCard key={index} data={item} />
                        })}
                    

                </div>

            </div>

        </div>
    )
}
