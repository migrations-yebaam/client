import {FC} from 'react'
import {BuilderPage} from './BuilderPage'
import { PageTitle } from '../../../components/layout/core'

const BuilderPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Layout Builder</PageTitle>
      <BuilderPage />
    </>
  )
}

export default BuilderPageWrapper
