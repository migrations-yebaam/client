

import React from 'react'
// import {Questions} from './partials/Questions'
import { Toolbar } from '../../../../components/layout/components/toolbar/Toolbar'
import { Content } from '../../../../components/layout/components/Content'
import { EnableSidebar } from '../../../../components/layout/core'


const Tag: React.FC = () => {
  return (
    <>
      <Toolbar />
      <Content>
        <EnableSidebar>
          {/* <Questions /> */}
        </EnableSidebar>
      </Content>
    </>
  )
}

export {Tag}
