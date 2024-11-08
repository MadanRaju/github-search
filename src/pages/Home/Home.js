import { useEffect, useState } from 'react'
import {
  Typography,
  Input,
  notification,
  Button,
  Table,
  Select,
  Spin
} from 'antd'
import {
  pageSizeList,
  columns,
  sortOrderList,
  sortFieldList
} from '../../utils/constants'
import './Home.css'

export const Home = params => {
  const [repos, setRepos] = useState([]) //useState(params?.reposData?.data ?? [])
  const [api, contextHolder] = notification.useNotification()
  const [userName, setUserName] = useState(null)
  const [pageNo, setPageNo] = useState(1)
  const [pageSize, setPageSize] = useState('10')
  const [sortOrder, setSortOrder] = useState('asc')
  const [sortFied, setSortField] = useState('updated')

  const openNotification = () => {
    api.error({
      message: 'Error',
      description: 'Something went wrong, please try again',
      duration: 0
    })
  }

  const parseData = response => {
    console.log('Success!', response)
    setRepos(response.data)
  }

  const fetchRepoError = error => {
    console.log(error)
    openNotification()
  }

  const fetchData = async () => {
    await params.getRepositories(
      userName,
      `page=${pageNo}&per_page=${Number(
        pageSize
      )}&sort=${sortFied}&direction=${sortOrder}`,
      parseData,
      fetchRepoError
    )
  }

  useEffect(() => {
    if (userName) fetchData()
  }, [pageSize, pageNo, sortOrder, sortFied])

  return (
    <div className='homeContainer'>
      {contextHolder}
      <Typography level={1} className='heading'>
        Github Repository Listing
      </Typography>
      <div className='formContainer'>
        <Typography level={2} className='userLabel'>
          Enter user or organisation name
        </Typography>
        <div className='inputContainer'>
          <Input
            placeholder='Enter Username'
            className='repoNameInput'
            onChange={event => {
              setUserName(event.target.value)
            }}
          />
          <Button
            type='primary'
            onClick={() => {
              if (userName) fetchData()
            }}
          >
            Get
          </Button>
        </div>
      </div>
      <div className='tableContainer'>
        {params?.reposData?.isPending && (
          <div className='spinContainer'>
            <Spin size='large' />
          </div>
        )}
        {params?.reposData?.isFulfilled && (
          <>
            <div className='sortContainer'>
              <div className='sortFieldContorl'>
                <div className='paginationControlMargin sortLabel'>
                  Sort Field:
                </div>
                <Select
                  className='paginationControlMargin'
                  defaultValue={sortFied}
                  style={{ width: 120 }}
                  onChange={event => {
                    setPageNo(1)
                    setSortField(event)
                  }}
                  options={sortFieldList}
                />
              </div>
              <div className='sortFieldContorl'>
                <div className='paginationControlMargin sortLabel'>
                  Sort Order:
                </div>
                <Select
                  className='paginationControlMargin'
                  defaultValue={sortOrder}
                  style={{ width: 120 }}
                  onChange={event => {
                    setPageNo(1)
                    setSortOrder(event)
                  }}
                  options={sortOrderList}
                />
              </div>
            </div>
            <Table columns={columns} dataSource={repos} pagination={false} />
            <div className='paginationControl'>
              <div className='paginationControlMargin sortLabel'>
                Page No: {pageNo}
              </div>
              <Button
                color='default'
                variant='outlined'
                className='paginationControlMargin'
                onClick={() => {
                  setPageNo(pageNo - 1)
                }}
                disabled={pageNo === 1}
              >
                Previous
              </Button>
              <Button
                color='default'
                variant='outlined'
                className='paginationControlMargin'
                onClick={() => {
                  setPageNo(pageNo + 1)
                }}
                disabled={repos.length === 0 || repos.length < Number(pageSize)}
              >
                Next
              </Button>
              <Select
                className='paginationControlMargin'
                defaultValue={pageSize}
                style={{ width: 120 }}
                onChange={event => {
                  setPageNo(1)
                  setPageSize(event)
                }}
                options={pageSizeList}
              />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Home
