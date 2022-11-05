import React from 'react';
const Student =({match}) => {
    const { studentname } = match.params;
    return (
        <div>
            <p>Student</p>
            <div>
                <div>
                    {'The student name is "${Umut Yorulmaz}"!'}
                </div>
            </div>
        
        </div>
            
    );
};
    
export default Student;
