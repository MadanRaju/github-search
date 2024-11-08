export const pageSizeList = [
  { value: '5', label: '5' },
  { value: '10', label: '10' },
  { value: '20', label: '20' },
  { value: '100', label: '100' }
]

export const sortOrderList = [
  { value: 'asc', label: 'asc' },
  { value: 'desc', label: 'desc' }
]

export const sortFieldList = [
  { value: 'stars', label: 'stars' },
  { value: 'forks', label: 'forks' },
  { value: 'updated', label: 'updated' },
]

export const columns = [
  {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Language',
    dataIndex: 'language'
  },
  {
    title: 'Open issues',
    dataIndex: 'open_issues_count'
  },
  {
    title: 'Last update',
    dataIndex: 'updated_at'
  },
  {
    title: 'Repository link',
    dataIndex: 'html_url',
    render: url => (
      <a href={url} target='_blank'>
        {url}
      </a>
    )
  }
]
