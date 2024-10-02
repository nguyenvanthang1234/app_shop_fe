import React, { useState } from 'react'
import { NextPage } from 'next'

// component
import IconifyIcon from 'src/components/Icon'

// mui
import { Collapse, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import List from '@mui/material/List'

// layout
import { VerticalItems } from 'src/configs/layout'

type TProps = {}

const RecursiveListItems = ({ items, level }: { items: any; level: number }) => {
  const [openItem, setOpenItem] = useState<{ [key: string]: boolean }>({})

  const handleClick = (title: string) => {
    setOpenItem(prve => ({
      ...prve,
      [title]: !prve[title]
    }))
  }

  return (
    <>
      {items?.map((item: any) => {
        return (
          <React.Fragment key={item.title}>
            <ListItemButton
              sx={{
                padding: `8px 10px 8px ${level * 10}px`
              }}
              onClick={() => {
                if (item.childrens) {
                  handleClick(item.title)
                }
              }}
            >
              <ListItemIcon>
                <IconifyIcon icon={item.icon} />
              </ListItemIcon>

              <ListItemText primary={item?.title} />
              {item?.childrens && item.childrens.length > 0 && (
                <>
                  {openItem[item.title] ? (
                    <IconifyIcon
                      icon='ic:twotone-expand-less'
                      style={{
                        transform: 'rotate(180deg)'
                      }}
                    />
                  ) : (
                    <IconifyIcon icon='ic:twotone-expand-less' />
                  )}
                </>
              )}
            </ListItemButton>
            {item.childrens && item.childrens.length > 0 && (
              <>
                {item.childrens.map((child: any) => {
                  return (
                    <Collapse key={child.icon} in={openItem[item.title]} timeout='auto' unmountOnExit>
                      <RecursiveListItems items={item.childrens} level={level + 1} />
                    </Collapse>
                  )
                })}
              </>
            )}
          </React.Fragment>
        )
      })}
    </>
  )
}
const ListVerticalLayout: NextPage<TProps> = () => {
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
    >
      <RecursiveListItems items={VerticalItems} level={1} />
    </List>
  )
}

export default ListVerticalLayout
