import React from "react"

 function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )

    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }

    return (
        <form className="flex flex-col p-4 justify-center items-center border-2 border-black w-96 ml-auto mr-auto mt-8 bg-pink-300 rounded-lg" onSubmit={handleSubmit}>
            <input
            className="p-2 mb-2 text-xl  bg-purple-500 text-white rounded-lg"
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
            className=" p-2 mb-2 text-xl  bg-purple-500 text-white rounded-lg"
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
            className="p-2 mb-2 text-xl  bg-purple-500 text-white rounded-lg"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea
            className=" p-2 mb-2 text-xl pr-7  bg-purple-500 text-white rounded-lg"
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            <div className="mt-6 text-xl">
            <input
            className="border-2 border-black p-2 mb-2"
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            </div>
            <br />
            <br />

            <fieldset className="border-2 border-black p-2 mb-2">
                <legend className="font-bold text-2xl">Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label className="text-xl" htmlFor="unemployed">Unemployed</label>
                <br />

                <input
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label  className="text-xl " htmlFor="part-time">Part-time</label>
                <br />

                <input
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label className="text-xl" htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />

            <label className="text-2xl font-bold" htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select
            className="rounded-xl p-2 mb-2 text-xl  bg-purple-500 text-white" 
                id="favColor"
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option className="text-xl" value="red">Red</option>
                <option  className="text-xl" value="orange">Orange</option>
                <option className="text-xl" value="yellow">Yellow</option>
                <option className="text-xl" value="green">Green</option>
                <option className="text-xl" value="blue">Blue</option>
                <option className="text-xl" value="indigo">Indigo</option>
                <option className="text-xl" value="violet">Violet</option>
            </select>
            <br />
            <br />
            <button className=" rounded-lg p-3 mb-2 bg-purple-500 text-white text-xl">Submit</button>
        </form>
    )
}

export default Form
