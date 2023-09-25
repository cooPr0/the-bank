import {
  BarChartIcon,
  CommitIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import CardInfo from "~/components/CardInfo";
import { Overview } from "~/components/Overview";
import { RecentTransactions } from "~/components/RecentTransactions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function OverviewTab() {
  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardInfo
          title="Total Volume"
          value={1000001}
          icon={<BarChartIcon className="h-8 w-8 text-green-500" />}
          caption="+20.1% from last month"
        />

        <CardInfo
          title="Total Transactions"
          value={93843}
          icon={<RocketIcon className="h-8 w-8 text-green-500" />}
          caption="+10.12% from last month"
        />
        <CardInfo
          title="Avg Transaction Value"
          value={999}
          icon={<CommitIcon className="h-8 w-8 text-green-500" />}
          caption="+50.82% from last month"
        />
        <CardInfo
          title="Total Users"
          value={345}
          icon={<PersonIcon className="h-8 w-8 text-green-500" />}
          caption="+5.12% from last month"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>List of last made transactions</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
      </div>
    </>
  );
}
