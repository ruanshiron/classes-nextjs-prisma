import Sider from "antd/lib/layout/Sider";
import { Dropdown, Menu } from "antd";
import Link from "next/link";
import {
    AppstoreOutlined,
    TeamOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import SubMenu from "antd/lib/menu/SubMenu";
import { useState } from "react";

type Props = {
    pathname: string
}

const StudentBar: React.FC<Props> = ({ pathname }) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)
    const [hide, setHide] = useState<string>('show')
    const onCollapse = (collapsed) => {
        setCollapsed(collapsed)
        if (collapsed)
            setHide('hide')
        else setHide('show')
    }

    const menuClass = (
        <Menu>
            <Menu.Item key="/classrooms">
                <Link href="/classrooms" >Tất cả các lớp học </Link>
            </Menu.Item>
            <Menu.Item key="/classrooms/registered">
                <Link href="/classrooms/registered">Các lớp đã đăng ký</Link>
            </Menu.Item>
            <Menu.Item key="/classrooms/active">
                <Link href="/classrooms/active" >Các lớp đang học</Link>
            </Menu.Item>
        </Menu>
    )

    const menuAssignment = (
        <Menu>
            <Menu.Item key="/assignments">
                <Link href="/assignments">Tất cả bài tập</Link>
            </Menu.Item>
            <Menu.Item key="/assignments/done">
                <Link href="/assignments/done" >Bài tập đã làm</Link>
            </Menu.Item>
            <Menu.Item key="/assignments/unfinished">
                <Link href="/assignments/unfinished" >Bài tập chưa hoàn thành</Link>
            </Menu.Item>
        </Menu>
    )

    return (
        <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={onCollapse}
            style={{
                overflow: "auto",
                height: "100vh",
            }}>
            <div className="logo" />
            <Menu
                theme="dark"
                mode="inline"
                selectedKeys={[pathname]}
                style={{
                }}
            >
                <Menu.Item key="/" icon={<AppstoreOutlined />} active={true}>
                    <Link href="/"><p className={hide}>Thời khóa biểu</p></Link>
                </Menu.Item>
                {collapsed ? (
                    <>
                        <Dropdown overlay={menuClass}>
                        <UserOutlined style={{ lineHeight: '40px', paddingLeft: '24px', margin: '4px 0' }} />
                        </Dropdown>
                        <br/>
                        <Dropdown overlay={menuAssignment}>
                            <TeamOutlined style={{ lineHeight: '40px', paddingLeft: '24px', margin: '4px 0' }} />
                        </Dropdown>
                    </>
                ) : (
                    <>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="Lớp học">
                            <Menu.Item key="/classrooms">
                                <Link href="/classrooms" >Tất cả các lớp học </Link>
                            </Menu.Item>
                            <Menu.Item key="/classrooms/registered">
                                <Link href="/classrooms/registered">Các lớp đã đăng ký</Link>
                            </Menu.Item>
                            <Menu.Item key="/classrooms/active">
                                <Link href="/classrooms/active" >Các lớp đang học</Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Bài tập">
                            <Menu.Item key="/assignments">
                                <Link href="/assignments">Tất cả bài tập</Link>
                            </Menu.Item>
                            <Menu.Item key="/assignments/done">
                                <Link href="/assignments/done" >Bài tập đã làm</Link>
                            </Menu.Item>
                            <Menu.Item key="/assignments/unfinished">
                                <Link href="/assignments/unfinished" >Bài tập chưa hoàn thành</Link>
                            </Menu.Item>
                        </SubMenu>
                    </>
                )}


                <Menu.Item key="/achievements" icon={<VideoCameraOutlined />}>
                    <Link href="/achievements"><p className={hide}>Kết quả học tập</p></Link>
                </Menu.Item>
            </Menu>
        </Sider>
    )
}

export default StudentBar;