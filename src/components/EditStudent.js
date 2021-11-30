import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const EditStudent = () => {
  const { id } = useParams();
  const contacts = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useNavigate();
  const currentContact = contacts.find(
    (contact) => contact.id === parseInt(id)
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const checkEmail = contacts.find(
      (contact) => contact.id !== parseInt(id) && contact.email === email
    );
    const checkNumber = contacts.find(
      (contact) =>
        contact.id !== parseInt(id) && contact.number === parseInt(number)
    );
    if (!number || !email || !name) {
      return toast.warning("please ill in all fields");
    }
    if (checkEmail) {
      return toast.error("this email already exists!");
    }
    if (checkNumber) {
      return toast.error("this number already exists!");
    }
    const data = {
      id: parseInt(id),
      name,
      email,
      number,
    };
    dispatch({ type: "UPDATE_STUDENT", payload: data });
    toast.success("Student update successfully!!");
    history("/");
  };
  return (
    <div className="container">
      {currentContact ? (
        <>
          <h1 className="display-3 my-5 text-center">EditStudent {id}</h1>
          <div className="row">
            <div className="col-md-6 shadow mx-auto p-5">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    placeholder="Phone number"
                    className="form-control"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Update student"
                    className="btn btn-dark"
                  />
                  <Link to="/" className="btn btn-danger ml-3">
                    Cancel
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (
        <h1 className="display-3 my-5 text-center">
          Student with id {id} not exits
        </h1>
      )}
    </div>
  );
};

export default EditStudent;
