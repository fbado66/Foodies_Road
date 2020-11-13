import React from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'


function Footer() {
    return(
        






            <Table id='footerTable'>
   

    <Table.Body id='footerTableBody'>
      <Table.Row>
        <Table.Cell>
          <Label ribbon>Foodies Road</Label>
        </Table.Cell>
        <Table.Cell><strong>HELP</strong></Table.Cell>
        <Table.Cell><strong>ABOUT US</strong></Table.Cell>
        <Table.Cell><strong>CONTACT US</strong></Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell></Table.Cell>
        <Table.Cell>Coming to the App Store soon</Table.Cell>
        <Table.Cell>The root for this app</Table.Cell>
        <Table.Cell>Meet Franklin Bado, Upcoming Software Developer</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell></Table.Cell>
        <Table.Cell>CodeBenders 2020</Table.Cell>
        <Table.Cell>Flatiron cohort 071320</Table.Cell>
        <Table.Cell>Repo Links </Table.Cell>
      </Table.Row>
      
    </Table.Body>
    

    <Table.Footer>
    <span id='demoNote'>This is a demo, no rights reserved.</span>
   
      
    </Table.Footer>
  </Table>

        
    )
}

export default Footer