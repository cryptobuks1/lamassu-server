import React, { memo } from 'react'

import { Td, THead, TBody, Table } from 'src/components/fake-table/Table'
import { startCase } from 'src/utils/string'

import ERow from './Row'

const ETable = memo(({ elements = [], data = [], save, validationSchema }) => {
  return (
    <Table>
      <THead>
        {elements.map(({ name, size, header, textAlign }, idx) => (
          <Td header key={idx} size={size} textAlign={textAlign}>
            {header || startCase(name)}
          </Td>
        ))}
        <Td header size={175} />
      </THead>
      <TBody>
        {data.map((it, idx) => (
          <ERow
            key={idx}
            value={it}
            elements={elements}
            save={save}
            validationSchema={validationSchema}
          />
        ))}
      </TBody>
    </Table>
  )
})

export default ETable
