import { AdminLayout } from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useProjects } from '@/hooks/useDataStore';
import { useNews } from '@/hooks/useDataStore';
import { useMedia } from '@/hooks/useDataStore';
import { FolderKanban, Newspaper, Image, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function AdminDashboard() {
  const { projects } = useProjects();
  const { news } = useNews();
  const { media } = useMedia();

  const stats = [
    {
      label: 'Total Projects',
      value: projects.length,
      icon: FolderKanban,
      href: '/admin/projects',
      color: 'text-blue-600 bg-blue-100',
    },
    {
      label: 'News Articles',
      value: news.length,
      icon: Newspaper,
      href: '/admin/news',
      color: 'text-green-600 bg-green-100',
    },
    {
      label: 'Media Items',
      value: media.length,
      icon: Image,
      href: '/admin/media',
      color: 'text-purple-600 bg-purple-100',
    },
  ];

  const recentNews = news.slice(0, 5);

  return (
    <AdminLayout title="Dashboard">
      <div className="space-y-8">
        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <Link key={stat.label} to={stat.href}>
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-3xl font-bold text-foreground mt-1">
                        {stat.value}
                      </p>
                    </div>
                    <div className={`p-3 rounded-xl ${stat.color}`}>
                      <stat.icon className="h-6 w-6" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              <Link to="/admin/projects">
                <Button>Add New Project</Button>
              </Link>
              <Link to="/admin/news">
                <Button variant="outline">Create News Article</Button>
              </Link>
              <Link to="/admin/media">
                <Button variant="outline">Upload Media</Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Recent News */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent News</CardTitle>
            <Link to="/admin/news">
              <Button variant="link" className="p-0 h-auto">
                View All
              </Button>
            </Link>
          </CardHeader>
          <CardContent>
            {recentNews.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                No news articles yet. Create your first one!
              </p>
            ) : (
              <div className="space-y-4">
                {recentNews.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-4 p-4 bg-muted/50 rounded-lg"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-foreground truncate">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.category} • {item.date}
                      </p>
                    </div>
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full shrink-0">
                      {item.category}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
