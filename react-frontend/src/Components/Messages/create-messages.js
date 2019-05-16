import React, {useState} from 'react'

const CreateMessage = () => {
    const [term, setTerm] = useState('')
    const [items, setItems] = useState([])

    const onChange = (e) => {
        e.preventDefault();
        setTerm(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        setTerm('')
        setItems([...items, term])
    }

    return(
        <div className='section'>
            <div className='container'>
                <div className='column is-10 is-offset-1'>
                    <div className='box'>
                        <label className='title is-3'>Posts</label>
                                {items.map(post => (
                                    <div className='box' key={post.toString()}>
                                    <label className='title is-5'></label>
                                        <div className='field'>
                                            <p>
                                                {post}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                    </div>
                    <div>
                        <form onSubmit={onSubmit}>
                            <input value={term} onChange={onChange}></input>
                            <button>Post</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default CreateMessage