namespace ArtisanJoinery.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddSortOrder : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Appointments",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        name = c.String(),
                        location = c.String(),
                        description = c.String(),
                        whenStart = c.DateTime(nullable: false),
                        whenEnd = c.DateTime(nullable: false),
                        type = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Appointments");
        }
    }
}
