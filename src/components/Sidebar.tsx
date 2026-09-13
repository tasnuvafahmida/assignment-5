import React, { useState } from 'react';

const Sidebar = ({setAddedTotal}) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm align-left align-top mr-16">
                <div className="card-body p-4">
                    <h2 className="card-title">Your Stack</h2>
                    <p>{setAddedTotal}.</p>
                    <div className='border border-dashed rounded-md border-slate-700'>
                        <p>heelooo</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;