import React from 'react'

const Card = ({ item }) => {
    return (
        <>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    {item.map((val) => {
                        return (
                            <div className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                                key={val.id}>
                                <div className="card-img-top text-center">
                                    <img src={val.img} alt={val.title} className='photo w-75' />
                                </div>
                                <div className="card-body">
                                    <div className="card-title fw-bold fs-4 text-center">
                                        {val.title} &nbsp;&nbsp;&nbsp;&nbsp;--&nbsp;&nbsp;
                                        {val.price}
                                    </div>
                                    <div className="card-text">{val.desc}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Card
