namespace ClassLibrary1.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initialize : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Users", "Message", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "Message");
        }
    }
}
