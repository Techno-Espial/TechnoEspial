import React, { useState } from 'react';
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const DropdownItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className={`dropdown-item ${isOpen ? 'open' : ''}`}>
      <div className="menu-header" onClick={toggleDropdown}>
        <span>{title}</span>
        <span className="toggle-sign">{isOpen ? '-' : '+'}</span>
      </div>
      {isOpen && <ul className="submenu">{children}</ul>}
    </li>
  );
};

const Week = () => {
    return (
        <div>
            <ul className="dropdown-menu text-lg font-bold">
                <DropdownItem title="Week 1 : HTML, CSS and Github">
                    <DropdownItem title="Day 1 : Start with HTML">
                        <li className='flex items-center gap-1'><div><MdOutlineSlowMotionVideo className='text-xl' /></div>What is HTML?</li>
                        <li className='flex items-center gap-1'><div><MdOutlineSlowMotionVideo className='text-xl' /></div>HTML List : Container tag, list tags (li,ul,li), line break, button</li>
                    </DropdownItem>
                </DropdownItem>
                <DropdownItem title="Week 1 : HTML, CSS and Github">
                    <DropdownItem title="Day 1 : Start with HTML">
                        <li className='flex items-center gap-1'><div><MdOutlineSlowMotionVideo className='text-xl' /></div>What is HTML?</li>
                        <li className='flex items-center gap-1'><div><MdOutlineSlowMotionVideo className='text-xl' /></div>HTML List : Container tag, list tags (li,ul,li), line break, button</li>
                    </DropdownItem>
                </DropdownItem>
                <DropdownItem title="Week 1 : HTML, CSS and Github">
                    <DropdownItem title="Day 1 : Start with HTML">
                        <li className='flex items-center gap-1'><div><MdOutlineSlowMotionVideo className='text-xl' /></div>What is HTML?</li>
                        <li className='flex items-center gap-1'><div><MdOutlineSlowMotionVideo className='text-xl' /></div>HTML List : Container tag, list tags (li,ul,li), line break, button</li>
                    </DropdownItem>
                </DropdownItem>
            </ul>
        </div>
    );
};

export default Week;