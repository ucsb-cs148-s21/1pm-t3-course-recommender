import React from 'react'

export const Preqreqs = ({prereqs}) => {
    return (
        <ul class="list">
        {
            prereqs && prereqs.map((prereq, i) => {
                return (
                    <li key={`prereq-${i}`}>{prereq}</li>
                )
            })
        }
        </ul>
    )
}