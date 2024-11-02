// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const onChangeTab = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item">
      <button className={`tab-btn ${activeTabClassName}`} onClick={onChangeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
