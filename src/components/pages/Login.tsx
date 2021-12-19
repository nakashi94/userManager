import { Box, Button, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import { memo, VFC } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
    return (
        <Flex align="center" justify="center" height="100v">
            <Box bg="white" w="sm" p={4} borderRadius="">
                <Heading as="h1" size="lg" textAlign="center">ユーザー管理アプリ</Heading>
                <Divider />
                <Stack spacing={6} py={4} px={10}>
                    <Input placeholder="ユーザーID" />
                    <Button bg="teal.400" color="white">ログイン</Button>
                </Stack>
            </Box>
        </Flex>
    )
})
