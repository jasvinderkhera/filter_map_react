import 'bootstrap/dist/css/bootstrap.min.css'; 

function Card1({data, setData, fullData}){
    const changeData = (data) => {
        let author = data.author
        let keyofArr = fullData.filter(function (writer){
            return writer.author == 'George Orwell'
         });
         console.log("Filtered Data:",keyofArr);
         setData(keyofArr)
        }
    const mapData = (data) => {
        let title = data.title
        let bookTitle = fullData.map(function (titles){
            return {"title":titles.title}
         })
        
        console.log("Title of Books:",bookTitle)
        setData(bookTitle)
    }
    


    return(
        <>
        <div className="col-sm-12 col-md-4 border border-primary rounded mx-auto">
            <h5 className="card-title">{data.title}</h5>
            <p className="card-text">{data.author}</p>
            <p className="card-text">{data.pages}</p>
            <a href="#" className="btn btn-danger" onClick={() => changeData(data)}>Filter Button</a>
            <a href="#" className="btn btn-danger" onClick={() => mapData(data)}>Map Button</a>
            </div>
            
            </>
    )
    }
export default Card1