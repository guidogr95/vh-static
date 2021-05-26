import { useState } from 'react'
// Assets
import { GrFormSearch } from 'react-icons/gr'
import { MdClose } from 'react-icons/md'
// Utils
import { useRouter } from 'next/router'

const SearchBox = () => {

    const router = useRouter()

    const [formData, setFormData] = useState('')

    const handleSubmit = (e) => {
        if (e) e.preventDefault()
        router.push(`https://vexxhost.com/?s=${encodeURIComponent(formData)}`)
    }

    return (
        <>
            <div className="searchBox" >
                <h4>
                    Search
                </h4>
                <form onSubmit={handleSubmit} >
                    <span className="screen-reader-text" >
                        Search for:
                    </span>
                    <div className="input-wrapper" >
                        <input
                            value={formData}
                            required
                            onChange={(e) => setFormData(e.target.value)}
                            placeholder="Search..."
                        />
                        <button
                            type="submit"
                        >
                            <GrFormSearch />
                        </button>
                        { formData.length > 0 &&
                            <div className="reset-form" >
                                <MdClose onClick={() => setFormData('')} />
                            </div>
                        }
                    </div>
                </form>
            </div>
            <style jsx>{`
                .searchBox input {
                    padding: 0 15px 0 29px;
                    border: 1px solid #d2d2d2;
                    color: #aaa9a9;
                    outline: 0;
                    font-size: 14px;
                    height: 29px;
                    width: 100%;
                }
                .searchBox input::placeholder {
                    color: #aaa9a9;
                    font-size: 14px;
                }
                .input-wrapper {
                    position: relative;
                }
                .input-wrapper .reset-form {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    right: 4px;
                    display: flex;
                    align-items: center;
                    color: #395B95;
                    cursor: pointer;
                }
                .input-wrapper button {
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    display: flex;
                    align-items: center;
                    background: none;
                    outline: 0;
                    border: 0;
                    color: #aaa9a9;
                    font-size: 1.4em;
                }
                .input-wrapper button :global(svg path) {
                    stroke: #aaa9a9;
                }
            `}</style>
        </>
    )
}

export default SearchBox