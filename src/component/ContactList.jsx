import React, { useEffect, useState } from 'react'
import SearchBox from './SearchBox'
import ContactItem from './ContactItem'
import { useSelector } from 'react-redux'

const ContactList = () => {
    const { contactList, keyword } = useSelector(state => state);
    const [filterList, setFilterList] = useState([]);
    useEffect(() => {
        if (keyword !== "") {
            let list = contactList.filter((item) => item.name.includes(keyword));

            setFilterList(list);
        } else {
            setFilterList(contactList);
        }
    }, [keyword, contactList])



    return (
        <div>
            <SearchBox />
            Contact Info Count : {filterList.length}
            <div className='contact-list'>
                {filterList.map((item, index) => (
                    <ContactItem item={item} key={index} />
                ))}
            </div>
            {/* <ContactItem /> */}
        </div>
    )
}

export default ContactList