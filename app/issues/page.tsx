import React from 'react'
import { Flex, Text, Button } from "@radix-ui/themes";
import Link from 'next/link';

const issues = () => {
  return (
    <Button><Link href="/issues/new">New Issue</Link></Button>

  )
}

export default issues