import React from 'react'
import Input from '../../db/components/Input'
export default function Price({radio_selected}) {
  return (
    <div className='ccp_container'>
      <div className="ccp">Price</div>
      <div className="all_label">
      <Input
          radio_selected={radio_selected}
          value=""
          title="All"
          name="test"
        />
        <Input
          radio_selected={radio_selected}
          value="50"
          title="$0 - $50"
          name="test"
        />
        <Input
          radio_selected={radio_selected}
          value="100"
          title="$50 - $100"
          name="test"
        />
        <Input
          radio_selected={radio_selected}
          value="150"
          title="$100 - $150"
          name="test"
        />
        <Input
          radio_selected={radio_selected}
          value="200"
          title="above $200"
          name="test"
        />
      </div>
    </div>
  )
}
