import React from 'react'
import List from './List'

const Lists = () => {
    const items: string[] = ["Mohammad", "Al Mamun"]
    const onClick = (item: string): void => alert(item)
    return (
        <List items={items} onClick={onClick} />
    )
}

export default Lists