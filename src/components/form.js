import React from 'react';

export default function StaticForm(props){
    return (
        <form>
            <label htmlFor='trackingNumber'>Tracking Number</label>
            <input type='text' name='trakingNumber' id='trackingNumber' />
            <select name='issue' id='issue'>
                <option value={'My delivery hasn\'t arrived'}>My delivery hasn't arrived</option>
                <option value='The wrong item was delivered'>The wrong item was delivered</option>
                <option value='Part of my order was missing'>Part of my order was missing</option>
                <option value='Some of my order arrived damaged'>Some of my order arrived damaged</option>
            </select>
            <label htmlFor="textarea">Give more details (optional)</label>
            <textarea></textarea>
        </form>
    );
}